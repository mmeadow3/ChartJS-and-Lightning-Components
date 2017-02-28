public class Dashboard {
    public void addLead(){
        lead newLead = new Lead(lastname='Meadows', firstName='M', company='NA', leadSource='Web');
        insert newLead;
    }
    
    //http request. has to be set in security settings to use salesforce 
    public void refreshDashboard(){
    HttpRequest req = new HttpRequest();
    req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());
    req.setMethod('PUT');
    req.setEndpoint(URL.getSalesforceBaseUrl().toExternalForm() + '/services/data/v36.0/analytics/dashboards/01Z410000011ldR');

    Http http = new Http();
    HttpResponse res = http.send(req);
}
}