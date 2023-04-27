
public class EventLoop {
  while(true){
    if(Event Queue receives a JavaScript Function Call) {
      ClientRequest request = EventQueue.getClientRequest();
      If(request requires BlokingIO or takes more computation time)
        Assign request to Thread T1
      Else
        Process and Prepare response
    }
  }
} 