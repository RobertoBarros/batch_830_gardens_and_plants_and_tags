import { Controller } from "@hotwired/stimulus";
import $ from 'jquery';
import 'select2'

export default class extends Controller {
  connect() {
    // console.log('connected select2 controller');
    $(this.element).select2({
      width: '100%'
    });
  }
}
