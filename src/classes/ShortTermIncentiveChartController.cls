// public class chartController {
//   //Use @AuraEnabled to enable client- and server-side access to the method
//   // @AuraEnabled
//
//   // public Integer ListPrice {get;set;}
//   // public Integer Discount {get;set;}
//       // @AuraEnabled
//       // public Integer numAccounts {get; set;}
//       //
//       // @AuraEnabled
//       // public Integer numContacts {get; set;}
//       //
//       @AuraEnabled
//       // public Integer myInt {get;set;}
//       public Integer myInt = 5;
//
//
//       @AuraEnabled
//       public static Integer GetInteger()
//       {
//           return 5;
//       }
//   }
public class ShortTermIncentiveChartController {
    @AuraEnabled
    public static String GetChartDataJSON(Id selectedTerritoryId){

        decimal annualTarget;
        decimal runningTotalSales = 0;
        string[] months = new String[]{'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'};

        //
        // for(region__c r : [select id, Annual_Sales_Target__c from region__c where id = :selectedTerritoryId limit 1]){
        //     annualTarget = r.Annual_Sales_Target__c;
        // }

        ChartDataWrapper chartData = new ChartDataWrapper();
        // for (ShortTermIncentiveValue__c rec: [select Sales_As_At__c, Total__c
        //                                       from ShortTermIncentiveValue__c
        //                                       where region__c = :selectedTerritoryId
        //                                       order by Sales_As_At__c
        //                                       limit 12]){
        //     integer month = rec.Sales_As_At__c.month();
        //     chartData.chartLabels.add(months[month-1]);
        // 
        //     chartData.chartTargetData.add(((annualTarget == null ? 0 : annualTarget) / 12 * month) / 1000000);      //Show in millions
        //     if (rec.Total__c != null){
        //         runningTotalSales = runningTotalSales + rec.Total__c;
        //         chartData.chartActualData.add(runningTotalSales / 1000000);      //Show in millions
        //     }
        // }
        return System.json.serialize(chartData);

    }


    class ChartDataWrapper
    {
        public List<String> chartLabels {get;set;}
        public List<Decimal> chartTargetData {get;set;}
        public List<Decimal> chartActualData {get;set;}

        public ChartDataWrapper(){
            chartLabels = new List<String>();
            chartTargetData = new List<Decimal>();
            chartActualData = new List<Decimal>();
        }
    }

}