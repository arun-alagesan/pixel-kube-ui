export default interface AuditDetails {
    auditType: string,
    entityName: string,
    entityKey: string,
    message: string,
    auditTime: string,
    userId: string,
    status: string
}