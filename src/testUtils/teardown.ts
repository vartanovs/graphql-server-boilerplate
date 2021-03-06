import { AddressInfo } from "net";

const { app, db } = require('./setup');

// Close Server and TypeOrm Connection upon testing completion
export const teardown = async () => {
  await db.close();
  const appAddress: AddressInfo | string = app.address();
  const { port } = (<AddressInfo>appAddress);
  console.log(`Server is shutting down on localhost:${port}`);
  await app.close();
  return null;
};
