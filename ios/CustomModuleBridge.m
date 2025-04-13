#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(CustomModule, NSObject)
RCT_EXTERN_METHOD(sendMessage:(NSString *)message withCallback:(RCTResponseSenderBlock)callback)
@end
