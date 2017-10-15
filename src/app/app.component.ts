import { Component,OnInit , HostListener} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class';
import { DetailsItemComponent} from './details/details.component';
declare let window:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  listItems:Array<any>=[];
  item:any={};
  private _opened: boolean = false;
  private _openedList: boolean = false;
  private _openedDetails: boolean = false;
  private _mode: string = 'push';
  private _positionList: string = 'right';
  private _backdrop: boolean = true;
  private closeOnClickBackdrop: boolean = true;


  slots:any={
    specialEvent:'',
    material:'',
    priceTo:'',
    accessory:'',
    operator:''
  };

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.ctrlKey && event.keyCode==66){
      this._opened = !this._opened;
    }
  }

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) {}

  private _toggleSidebar() {
    this._opened = !this._opened;

  }

  ngOnInit(){}

  _toogleListSidebar(){
    this._openedList = !this._openedList;
  }

  onResponse(data:any){
    console.log(data)
    this.slots=data.audioOutput.slots || {};
    // debugger;
    if(data.audioOutput.sessionAttributes){
      if(data.audioOutput.sessionAttributes.currentRequest) {
        let response: any = JSON.parse(data.audioOutput.sessionAttributes.currentRequest);

        this.listItems = response.responseCard[0] ? response.responseCard : [];
        this._openedList=true;

        if(data.audioOutput.dialogState=="Fulfilled"){
           window.eventConversation.emit('StopConv');
        }
      }
    }
  }

  public openWindow(){
    window.open(this.item.img);
  }
  public openDetails(item) {
    this._openedDetails=true;
    this.item=item;
  }

  public backDetails(){
    this._openedDetails=false;
  }

}
