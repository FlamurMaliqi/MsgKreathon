import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';


export default ({json, columns, expander}: {json: any[], columns: string[], expander?:string }) => {

    return (
        <TreeTable value={json} tableStyle={{ minWidth: '50rem' }}>
            {columns.map((column, index) => (
                <Column key={index} field={column} expander={expander ? json[index][expander] : undefined} />
                    
            ))}
        </TreeTable>
    )

}
