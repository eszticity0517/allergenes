import { Component } from "@angular/core";

@Component({
    selector: 'allergenes',
    templateUrl: './allergenes.component.html'
})
export class AllergenesComponent {
    title = "List of allergenes";
    allergenes = ["Milk", "Egg", "Peanut", "Soy", "Wheat", "Three Nut", "Shellfish", "Fish", "Sesame"];
}