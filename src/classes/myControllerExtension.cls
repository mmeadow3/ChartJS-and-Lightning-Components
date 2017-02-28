public class myControllerExtension {
    private Map<String, Integer> myMap = new Map<String, Integer>{'a' => 1, 'b' => 2, 'c' => 3};


    private final Account acct;
    
    // The extension constructor initializes the private member
    // variable acct by using the getRecord method from the standard
    // controller.
    public myControllerExtension(ApexPages.StandardController stdController) {
        this.acct = (Account)stdController.getRecord();
    }

    public String getno() {
        return 'Hello ' + acct.name + ' (' + acct.id + ')';
    }
}