export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length - 1;
    let low = 0;
    let mid;

    while (low <= high){
        mid = Math.floor(low + (high - low)/2)
        if (haystack[mid] == needle)
            return true
        else if (haystack[mid] < needle)
            low = mid + 1
        else 
            high = mid - 1
    }

    return false;
}