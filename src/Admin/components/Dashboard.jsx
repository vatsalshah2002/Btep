
import { Grid, ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Achivement from "../tables/Achievement";
import MonthlyOverview from "../tables/MonthlyOverview";
import CustomersTable from "../tables/CustomersTable";
import Admin from "../Admin";
import CardStatsVertical from "../../styles/CardStatsVertical";
import SalesOverTime from "../tables/SalesOverTime";
import { CurrencyUsd, HelpCircleOutline, Poll } from "mdi-material-ui";

const darkTheme1 = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#312d4b',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
});



// bg-[#28243d]
const Dashboard = () => {
  const {auth}=useSelector(store=>store);
  const navigate=useNavigate()


 
  return (
    <div className="adminContainer ">
      <ThemeProvider theme={customTheme}>
        <Admin>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Achivement />
            </Grid>
            <Grid item xs={12} md={8}>
              <MonthlyOverview />
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <TotalEarning />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$25.6k"
                    icon={<Poll />}
                    color="success"
                    trendNumber="+42%"
                    title="Total Profit"
                    subtitle="Weekly Profit"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="$78"
                    title="Refunds"
                    trend="negative"
                    color="secondary"
                    trendNumber="-15%"
                    subtitle="Past Month"
                    icon={<CurrencyUsd />}
                  />
                </Grid>
              
                <Grid item xs={6}>
                  <CardStatsVertical
                    stats="15"
                    color="warning"
                    trend="negative"
                    trendNumber="-18%"
                    subtitle="Last Week"
                    title="Sales Queries"
                    icon={<HelpCircleOutline />}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
            <CustomersTable />
            </Grid>
            
            <Grid item xs={12} md={6} lg={4}>
              <SalesOverTime/>
            </Grid>
           
            <Grid item xs={12}>
              <CustomersTable />
            </Grid>
          </Grid>
        </Admin>
      </ThemeProvider>
    </div>
  );
};

export default Dashboard;
