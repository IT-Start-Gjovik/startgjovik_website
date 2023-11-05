export type MapPositionType = {
    type: 'Feature';
    geometry: {
        coordinates: Array<Array<number>>;
        type: 'Polygon';
    };
    properties: {
        buildingName: string;
        campusId: number;
        description: string | null;
        externalReferenceTypes: Array<any>; // Replace 'any' with a more specific type if possible
        floorId: number;
        floorName: string;
        id: number;
        identifier: string;
        images: Array<any>; // Replace 'any' with a more specific type if possible
        infoUrl: string | null;
        infoUrlText: string | null;
        names: Array<string>;
        poiId: number;
        title: string;
        types: Array<{
            // define the structure of the objects in this array if possible
        }>;
        zLevel: number;
    };
}
