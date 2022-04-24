function handshake(n) {
  // Write your code here
   if (n === 0)
        return 0;
      else
        return n - 1 + handshake(n - 1);
}