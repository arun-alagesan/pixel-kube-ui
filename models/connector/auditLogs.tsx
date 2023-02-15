import AuditDetails from "./auditDetails";
import LogDetails from "./logDetails";

export default interface AuditLogs {
    logs : LogDetails[],
    audits: AuditDetails[]

    
}