import org.apache.logging.log4j.*;

public class test {
	public static Logger log=LogManager.getLogger(test.class.getName());
    public static void main(String args[]){
    	log.info("Its an Info");
        log.debug("Its a Debug");
        log.error("Its an Error");
        log.fatal("Its a Fatal");
    }
}
