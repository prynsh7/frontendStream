import Chart from "react-google-charts";

const data = [
    ["Country", "Views"],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700]
];

const options = {
    colorAxis: { colors: ['#392DCA'] },
    backgroundColor: '#ffffff',
    datalessRegionColor: '#392DCA',
    defaultColor: '#392DCA',
}

const AvgWatchTimePerCountry = () => {
    return (
        <div>
            <div className="flex items-center justify-center py-8 px-4">
                <div className="w-11/12">
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="lg:flex w-full justify-between">
                                <h3 className="text-gray-600 dark:text-gray-400 leading-5 text-base md:text-xl font-bold">Average Watch Time Per Country</h3>
                                <div className="flex items-center justify-between lg:justify-start mt-2 md:mt-4 lg:mt-0">
                                </div>
                            </div>

                        </div>
                        <div className="mt-6">
                            <Chart chartType="GeoChart" controls={[]} options={options} width="100%" height="400px" data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvgWatchTimePerCountry