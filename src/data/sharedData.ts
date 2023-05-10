// globals.ts
import { Injectable } from "@angular/core";
import { fakeNews } from "./fakeNews";
import { allUsers } from "./pageSetup";
import { simpleActions } from "./simpleActions";
import { playerRecord , currentPlayer} from "./game";
import { simpleNewsList } from "./simpleFakeNews";

@Injectable()
export class Globals {
  selectedActualPlayer : any;
  fakeNews = fakeNews;
  allUsers = allUsers;
  simpleActions = simpleActions;
  playerRecord = playerRecord;
  currentPlayer = currentPlayer;
  simpleFakeNews = simpleNewsList;
}