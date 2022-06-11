import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ContactsService } from 'src/app/services/contacts.service';
import { ContactElement } from 'src/app/shared/models/contacts.model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  data!: ContactElement[];
  fileName = 'DataContact.xlsx';
  constructor(
    private ContactsService: ContactsService,
    private ModalConfirm: NzModalService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    this.ContactsService.getAllContact().subscribe((data) => {
      data.map(
        (item) =>
          (item.createAt = dayjs(item.createAt).format('DD-MM-YYYY   hh:mm:ss'))
      );
      this.data = data;
    });
  }
  handlerRemove(id: any) {
    this.ModalConfirm.confirm({
      nzTitle: 'Xác nhận xóa',
      nzOkText: 'Xác nhận',
      nzCancelText: 'Hủy',
      nzOnOk: () => {
        this.ContactsService.removeContact(id).subscribe((data) => {
          this.data = this.data.filter((item) => item.id != id);
          this.notification.success('Thông báo', 'Xóa thông tin thành công');
        });
      },
    });
  }
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('data-contact');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
}
