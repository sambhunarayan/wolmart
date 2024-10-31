class Cipher {
  constructor({ log } = {}) {
    this.log = log || ((...printString) => console.log(printString));
  }

  // Create a UUID for IV
  createUuid() {
    let dt = new Date().getTime();
    const uuid = "xxxxxxyxxx6xxxxy".replace(/[xy]/g, (c) => {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
  }

  async encrypt(response, key) {
    if (typeof response === "object") response = JSON.stringify(response);

    // Generate IV
    const iv = this.createUuid().slice(0, 16);
    const encodedKey = await this.importKey(key);
    const encodedResponse = new TextEncoder().encode(response);
    const ivBuffer = new TextEncoder().encode(iv);

    // Encrypt the response
    const encryptedBuffer = await window.crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv: ivBuffer,
      },
      encodedKey,
      encodedResponse
    );

    // Convert the encrypted buffer to base64
    const encryptedArray = new Uint8Array(encryptedBuffer);
    const encryptedBase64 = btoa(String.fromCharCode(...encryptedArray));

    return iv + encryptedBase64; // Return IV + Encrypted data
  }

  async decrypt(request, key) {
    const iv = request.slice(0, 16); // Extract IV from the start
    const data = request.slice(16); // Remaining is the encrypted data

    const encodedKey = await this.importKey(key);
    const ivBuffer = new TextEncoder().encode(iv);
    const encryptedBuffer = Uint8Array.from(atob(data), (c) => c.charCodeAt(0));

    // Decrypt the response
    const decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-CBC",
        iv: ivBuffer,
      },
      encodedKey,
      encryptedBuffer
    );

    const decrypted = new TextDecoder().decode(decryptedBuffer);
    // console.log("DECRYPTED DATA::::::::::::::::::::::::" + decrypted);
    return JSON.parse(decrypted);
  }

  async importKey(key) {
    const rawKey = new TextEncoder().encode(key);
    return await window.crypto.subtle.importKey(
      "raw",
      rawKey,
      {
        name: "AES-CBC",
      },
      false,
      ["encrypt", "decrypt"]
    );
  }
}

export default Cipher;
