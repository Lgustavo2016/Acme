import { Component, OnChanges, Input, Output, EventEmitter } from "../../../node_modules/@angular/core";

@Component({

    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']

})

export class StarComponent implements OnChanges {

    // We use the @Input() decorator to pass data to a nested (child) component
    @Input() rating: number;
    starWidth: number;

    // We use the @Output() decorator to decorate any propertie of the nested component class
    // however the property type, must be an Event
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    //This lifecycle hook is called whenever the component changes
    ngOnChanges(): void {

        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {

        // ${} is a way to concat an variable without using '+'
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}