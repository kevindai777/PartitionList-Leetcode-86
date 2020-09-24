//Java Solution

class Solution {
    public ListNode partition(ListNode head, int x) {
        ListNode newNode1 = new ListNode(-1);
        ListNode temp1 = newNode1;
        
        ListNode newNode2 = new ListNode(-1);
        ListNode temp2 = newNode2;
        
        while (head != null) {
            if (head.val < x) {
                temp1.next = head;
                head = head.next;
                temp1 = temp1.next;
            } else {
                temp2.next = head;
                head = head.next;
                temp2 = temp2.next;
            }
        }
        temp1.next = newNode2.next;
        temp2.next = null;
        
        return newNode1.next;
    }
}