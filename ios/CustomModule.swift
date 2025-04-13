import Foundation

@objc(CustomModule)
class CustomModule: NSObject {
  
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return false
  }
  
  @objc
  func sendMessage(_ message: String, callback: RCTResponseSenderBlock) {
    let response = "Received: \(message)"
    callback([response])
  }
}
