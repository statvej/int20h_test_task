variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "eu-central-1"
}

variable "cluster_name" {
  description = "Name of the Kubernetes cluster"
  type        = string
  default     = "think-exe"
}

variable "node_group_name" {
  description = "Name of the Kubernetes node group"
  type        = string
  default     = "think-exe-nodes"
}

variable "instance_type" {
  description = "Instance type for Kubernetes worker nodes"
  type        = string
  default     = "t3.micro"
}

variable "desired_size" {
  description = "Desired number of worker nodes"
  type        = number
  default     = 1
}

variable "max_size" {
  description = "Maximum number of worker nodes"
  type        = number
  default     = 1
}

variable "min_size" {
  description = "Minimum number of worker nodes"
  type        = number
  default     = 1
}

variable "db_name" {
  description = "Name of the PostgreSQL database"
  type        = string
  default     = "app"
}

variable "db_username" {
  description = "Username for the PostgreSQL database"
  type        = string
  default     = "admin"
}

variable "db_port" {
  description = "Port for the PostgreSQL database"
  type        = number
  default     = 5432
}