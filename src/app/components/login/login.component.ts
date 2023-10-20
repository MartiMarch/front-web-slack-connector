import { Component, ViewEncapsulation } from "@angular/core";
import { LoginService } from "../../services/login/login.service";

@Component({
    selector: 'login',
    templateUrl: '../../templates/login/login.html',
    styleUrls: ['../../styles/login/login.css'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginComponent{
    username: string = '';
    password: string = '';

    constructor(private loginService: LoginService) {}

}