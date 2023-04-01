---
title: "Go concurrency - WaitGroups"
publish_date: "2023-04-01"
---

The WaitGroup in Go lang is a synchronization mechanism used to coordinate a group of goroutines by waiting for them to complete their execution before proceeding further.

```go
package main

import (
	"fmt"
	"sync"
)

func sq(i int) {
	fmt.Println(i)
}

func main() {
	wg := sync.WaitGroup{}

	wg.Add(5)

	for i := 0; i < 5; i++ {
		go func(i int) {
			defer wg.Done()
			sq(i)
		}(i)
	}

	wg.Wait()
}
```

What if the WaitGroup is passed to the concurrent function?

```go
package main

import (
	"fmt"
	"sync"
)

func sq(i int, wg *sync.WaitGroup) {
	fmt.Println(i)
    wg.Done()
}

func main() {
	wg := sync.WaitGroup{}

	wg.Add(5)

	for i := 0; i < 5; i++ {
        go sq(i, &wg)
	}

	wg.Wait()
}
```

This would work, however it's not scalable as the concurrent function needs to be aware of the the waitGroup and can't be run without a Go routine.
