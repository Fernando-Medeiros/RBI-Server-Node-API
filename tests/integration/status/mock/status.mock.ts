import { v4 } from "uuid";
import { Status } from "@dom/entities/status/status";
import statusDataMock from "./status.data.mock.json";

statusDataMock.pubId = v4();

export class StatusMock {
  constructor(private props = new Status(statusDataMock)) {}

  get pubId(): string {
    return statusDataMock.pubId;
  }

  get dataToCreate() {
    return this.props.getDataToSave();
  }
}
