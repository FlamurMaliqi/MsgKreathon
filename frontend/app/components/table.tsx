import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default ({json, columns}: {json: any[], columns: string[]}) => {

    return (
        <DataTable value={json} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((column, index) => (
                <Column key={index} field={column} header={column}>
                    
                </Column>
            ))}
        </DataTable>
    )

}
