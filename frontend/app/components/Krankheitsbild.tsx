import Card from './Card';

export default function BasicDemo() {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card/>
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
            <div className='col-span-1 rounded-lg bg-gray-200 p-4'>
                <Card />
            </div>
        </div>
    );
}
