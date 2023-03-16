export interface crudPrisma {
    Create(data: Object)
    Read()
    Update(data: Object, id: string)
    Delete(id: string)
    GetPerID(id: string)
}