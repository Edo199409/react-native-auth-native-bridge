import Foundation

@objc(CustomModule)
class CustomModule: NSObject {
  
  @objc(sendMessage:withCallback:)
  func sendMessage(message: String, callback: @escaping RCTResponseSenderBlock) {
    let response = "Received: \(message)"
    callback([response])
  }
}
