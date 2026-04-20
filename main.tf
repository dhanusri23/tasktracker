provider "local" {}

resource "local_file" "demo" {
  content  = "Hello Terraform"
  filename = "demo.txt"
}