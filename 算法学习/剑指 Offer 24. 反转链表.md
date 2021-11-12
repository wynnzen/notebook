# 剑指 Offer 24. 反转链表
## 题目
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。


示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 

限制：

0 <= 节点个数 <= 5000

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 分析

每个链表节点有本身的value和下一个节点的指针，定义一个prev的节点。这个1由指向2的next指向了定义的prev也就是null，那么就可以`curr.next = prev`。这里就修改了指向，然后将current向后移动，就是`prev = curr`和`curr = next`了

## 解答

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    while(curr){
        let next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next;
    }
    return prev
};
```