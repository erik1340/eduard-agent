import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.asana.com/v2/mcp",
  description: "Coordinate tasks, projects, and goals.",
  auth: connect("asana/eduard-asana"),
});
