
import ConnectionStringDetails from "./connectionStringDetails";
import CalendarDetails from "./calendarDetails"
import AuditDetails from "./auditDetails";
import LogDetails from "./logDetails";

export default interface ConnectionDetails {
    id: number;
    orgId:string;
    name: string;
    source: string;
    accessMode: string;
    modifiedBy: string;
    modified: Date;
    noOfDaysBefore: number;
    noOfDaysAfter: number;
    noOfSecondsToSyncCalendar: number;
    connectionString: ConnectionStringDetails;
    connectionStringFreeText?: any;
    calendars: CalendarDetails[];
    audits: AuditDetails[];
    logs: LogDetails[];

}


