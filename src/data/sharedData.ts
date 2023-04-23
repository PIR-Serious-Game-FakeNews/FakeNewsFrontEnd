// globals.ts
import { Injectable } from "@angular/core";
import { fakeNews } from "./fakeNews";
import { allUsers } from "./pageSetup";
import { simpleActions } from "./simpleActions";

@Injectable()
export class Globals {
  selectedActualPlayer : any;
  fakeNews = fakeNews;
  allUsers = allUsers;
  simpleActions = simpleActions;
}