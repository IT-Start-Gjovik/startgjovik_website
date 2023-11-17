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
        externalReferenceTypes: Array<any>;
        floorId: number;
        floorName: string;
        id: number;
        identifier: string;
        names: Array<string>;
        title: string;
        zLevel: number;
    };
}
