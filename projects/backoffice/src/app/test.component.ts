import { Component, Input } from "@angular/core";

@Component({
  selector: 'amb-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // template:
  //     `<h1>Test Component</h1>
  //     <table>
  //       <tr>
  //         <th>Name</th>
  //       </tr>
  //       <tr>
  //         <td>{{name01}}</td>
  //       </tr>
  //       <tr>
  //         <td>{{name02}}</td>
  //       </tr>
  //       <tr>
  //         <td>{{name03}}</td>
  //       </tr>
  //       <tr>
  //         <td>{{name04}}</td>
  //       </tr>
  //     </table>`,
  // styles: ['h1 {color: blue;}', 'table {font-size: 30px;}'],
})
export class TestComponent {
  @Input('title') titulo = 'app test';
  name01 = 'Jhon';
  name02 = 'Nicol';
  name03 = 'Jeremy';
  name04 = 'Romy';

  constructor() {
    setInterval(() => {
      this.name01 = 'Jhon ' + Math.random();
      this.name02 = 'Nicol ' + Math.random();
      this.name03 = 'Jeremy ' + Math.random();
      this.name04 = 'Romy ' + Math.random();
    }, 1000)
  }

}
