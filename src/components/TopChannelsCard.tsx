import { BarList } from './Charts/BarList';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const chartData = [
  {
    name: '/general',
    value: 1230
  },
  {
    name: '/dudas-programacion',
    value: 751
  },
  {
    name: '/dudas-diseño',
    value: 471
  },
  {
    name: '/el-bar',
    value: 280
  },
  {
    name: '/proyectos-comunitarios',
    value: 87
  }
];

function TopChannelsCard() {
  return (
    <Card className="  rounded-lg p-12  ">
      <CardHeader className="space-y-4 p-0">
        <CardTitle className=" p-0 text-left text-primary-900 font-bold text-2xl leading-7 ">Top Channels</CardTitle>
        <CardDescription className="font-dmSans text-left p-0 text-lg font-medium text-cs-slate-700">
          Highlights the channels with the highest activity based on the number of messages sent.
        </CardDescription>
        <Select>
          <SelectTrigger className="text-cs-slate-900 shadow-sm font-normal text-sm rounded-md w-[175px] h-[36px] border-cs-slate-500  pr-2.5">
            <SelectValue className="p-20 bg-black" placeholder="Select a month" />
          </SelectTrigger>
          <SelectContent className="text-cs-slate-900">
            <SelectGroup className="bg-background">
              <SelectItem value="Last month">Last month</SelectItem>
              <SelectItem value="Last 3 months">Last 3 months</SelectItem>
              <SelectItem value="Last 6 months">Last 3 months</SelectItem>
              <SelectItem value="Last year">Last year</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="p-0">
        <div className="space-x-2 text-left pb-6 pt-3">
          <span className="text-[#374151] text-3xl font-semibold">10,234</span>
          <span className="text-sm font-normal text-cs-slate-700 ">Mensajes totales</span>
        </div>
        <BarList data={chartData} color="red" />
      </CardContent>
    </Card>
  );
}

export default TopChannelsCard;
