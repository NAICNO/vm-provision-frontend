# Pagination Reference

List endpoints return paginated results. Use these query parameters to navigate:

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | integer | Page number (1-based) |
| `page_size` | integer | Number of results per page |

## Response Headers

| Header | Type | Description |
|--------|------|-------------|
| `X-Result-Count` | integer | Total number of results matching the query |

## Example

```
GET /api/customers/?page=2&page_size=10
```

Returns the second page of 10 results. Check the `X-Result-Count` header for the total count.

## HEAD Requests

Most list endpoints also support `HEAD` requests, which return only the `X-Result-Count` header without the response body. Use this to efficiently count matching items.
