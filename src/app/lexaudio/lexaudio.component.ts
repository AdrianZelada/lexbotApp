/**
 * Created by iZel on 10/13/17.
 */
import { Component,OnInit , Output,EventEmitter} from '@angular/core';
declare let window:any;


@Component({
  selector: 'lexaudio',
  templateUrl: './lexaudio.component.html',
  styleUrls:['./lexaudio.css']
})
export class LexAudioComponent implements OnInit{
  alexaudio:any;
  transcript:any='';
  @Output() onResponse:EventEmitter<any> = new EventEmitter();
  constructor(){

  }

  ngOnInit(){
    this.alexaudio= new window.lexaudio.example();
    console.log(this.alexaudio)

    document.addEventListener('outputData',(data:any)=>{
      // console.log(data)
      this.transcript=data.detail.inputTranscript;
    },false);

    document.addEventListener('onConversation',(data:any)=>{
      console.log('onConversation');
      // console.log(data);
    },false);

    // document.addEventListener('onInitial',(data:any)=>{
    //   console.log('onInitial');
    //   console.log(data);
    // },false);

    document.addEventListener('onListening',(data:any)=>{
      console.log('onListening');
      // console.log(data);
    },false);

    document.addEventListener('onSending',(data:any)=>{
      console.log('onSending');
      // console.log(data);
    },false);

    document.addEventListener('onResponseConversation',(data:any)=>{
      this.transcript=data.detail.audioOutput.message;
      this.onResponse.emit(data.detail);
    },false);

  }

  initialConv(){
    window.eventConversation.emit('Initial');
  }

  stopConv(){
    window.eventConversation.emit('StopConv');
  }
}
