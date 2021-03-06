import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/_services/item.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {
  itemList = [];
  itemTempList = [];
  tempArray = [];
  index: number;

  constructor(
    public itemService: ItemService,
    public router: Router,
    public toastr: ToastrService
  ) { }

  ngOnInit(): void {
    window.document.body.style.background = 'radial-gradient(circle at 100%, #fff8fd, #fff8fd 50%, #deeaee 75%, #fff8fd 75%)';
    this.getAllItems();
  }

  getCups(ind: number){
    this.index = ind;
    this.itemList = this.itemTempList;
    this.tempArray = [];
    this.itemList.forEach((el) => {
      if(el.category == ind){
        this.tempArray.push(el);
      }
    })
    this.itemList = this.tempArray;
  }

  getAllCups(){
    this.itemList = this.itemTempList;
  }

  cancel(){
    this.router.navigate(['/']);
  }

  edit(id, item){
    this.itemService.idItem = id;
    this.itemService.currentItem = item;
    this.router.navigate(['/admin','edititem']);
  }

  Delete(id){
    if(id == null)
      return;
    else if(confirm('Are you sure to delete this record ?')){
      this.itemService.deleteItem(id).subscribe( res => {
        this.toastr.success('Successful Delete', 'Notification');
        this.toastr.warning('You may need to refresh page to get updated information', 'ATTENTION');
      })
      this.getAllItems();
      this.getCups(this.index);
    }
  }

  getAllItems(){
    this.itemService.getItems()
      .subscribe(res => this.itemList = this.itemTempList = res as []);
  }
}


