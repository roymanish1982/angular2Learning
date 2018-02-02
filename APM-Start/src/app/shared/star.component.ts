import { Component,OnChanges, Input , Output, EventEmitter} from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth:number;
    @Input() rating:number;
    @Output() ratingClickedNotifyEvent : EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges(): void{
        this.starWidth =this.rating * 86/5
    }

   

    onClick(){
      this.ratingClickedNotifyEvent.emit(this.rating.toString());
      console.log(`The rating ${this.rating} was clicked`);
    }
}