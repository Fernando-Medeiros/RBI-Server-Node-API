import type { StatusProps } from "app/use-cases/status-cases/repository/status.props";
import statusDataMock from "example/status.data.mock.json";
import { v4 } from "uuid";

export class StatusMock {
  private props: StatusProps;

  constructor() {
    this.props = { ...statusDataMock, ...{ pubId: v4() } };
  }

  get pubId(): string {
    return this.props.pubId;
  }

  get dataToCreate(): StatusProps {
    return this.props;
  }
}
