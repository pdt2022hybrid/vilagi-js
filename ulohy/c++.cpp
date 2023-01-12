#include <iostream>
using namespace std;

int main() {
  
  /*for (int i = 1567; i >= 1235; i--) {
    cout << i << endl;
  }
  */
 /*for (int i = 660; i >= 600; i--)
 {
  if (i % 2 == 0) {
    cout << i << endl;
  }
 }*/
 /*for (int i = 801; i >= 751; i--)
 {
  if (i % 2 == 1) {
    cout << i << endl;
  }
 }*/
 
 int a, b;
 cin >> a >> b;
 for (int c = a; c <= b; c++) {
  if(c % 6 == 0) {
    cout << c << endl;
  }
 }
      return 0;
}