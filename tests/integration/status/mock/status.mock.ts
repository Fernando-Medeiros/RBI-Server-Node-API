import { v4 } from "uuid";
import { Status } from "domain/entities/status/status";
import statusDataMock from "example/status.data.mock.json";

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
