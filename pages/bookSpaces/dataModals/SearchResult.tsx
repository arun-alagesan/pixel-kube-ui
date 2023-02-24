
export interface Result {
    id: string;
    RoomName: string;
    Description: string;
    StartDate: string;
    EndDate: string;
    RoomID:string;


}
export interface SearchResult {
    Result: Result[]
}