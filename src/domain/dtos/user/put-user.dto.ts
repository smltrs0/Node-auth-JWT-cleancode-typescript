
export class PutUserDto {
    id: string;
    user: any;

    private constructor(id: string, user: any) {
        this.id = id;
        this.user = user;
    }


    static create(id : string ,object: { [key: string]: any }): [string[], PutUserDto?] {

        const error: string[] = [];
        
        if (Object.keys(object).length === 0) {
            error.push('The object is empty');
        }

        return [
            error,
            new PutUserDto(id, object)
        ];
        
    }
}