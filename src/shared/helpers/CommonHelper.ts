export class ExceptionDto{
    public erroR_MESSAGE: string | undefined;
    public statuS_CODE: number | undefined;
    public data: any

}
export class CommonHelper {
    static ConvertResponseMessage(data: string): ExceptionDto {
        return JSON.parse(data) as ExceptionDto;
    }
}