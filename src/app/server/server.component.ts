import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'

})
export class ServerComponent {
    serverid: number = 10
    ServerStatus:string = 'offline'

    getserverstatus() {
        return this.ServerStatus

    }



}