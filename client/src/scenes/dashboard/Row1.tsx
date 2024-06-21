
import DashboardBox from "../../components/DashboardBox";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useGetKpisQuery,
  useGetProductsQuery } from "@/state/api";
import { Palette } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
} from "recharts";
type Props = {}

const Row1 = () => {
  const { palette } = useTheme();

  const { data: productData } = useGetProductsQuery();
  const {data}= useGetKpisQuery();
  console.log("data",data);
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses,
        };
      })
    );
  }, [data]);
  
  const productColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "expense",
      headerName: "Expense",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ];

  
    return (
      <>
      <DashboardBox gridArea="a">
      <ResponsiveContainer width="100%" height="100%">
      <AreaChart
      width={500}
      height={400}
      data={revenueExpenses}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="revenue" stroke={palette.primary.main} fill="#8884d8" />
    </AreaChart>
          
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="b">
      
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>






      </DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      
      
      
      </>
    )
  
}



export default Row1